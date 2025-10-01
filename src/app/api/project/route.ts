import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  let page = 1;
  let allRepos: any[] = [];

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
      {
        headers: token ? { Authorization: `token ${token}` } : {},
        next: { revalidate: 3600 }, // cache for 1h
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
    }

    const repos = await res.json();

    if (repos.length === 0) break; // no more pages

    allRepos = allRepos.concat(repos);
    page++;
  }

  // Filter & sort (optional)
  const projects = allRepos
    .filter((repo: any) => !repo.fork) // skip forks
    .sort((a, b) => b.stargazers_count - a.stargazers_count) // sort by stars
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
    }));

  return NextResponse.json(projects);
}
