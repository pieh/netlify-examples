import repoLink from "../../components/repo-link.js";

export default {
  title: "Environment variables",
  metaDescription: "Learn how to use environment variables in Netlify Edge Functions.",
  page: function () {
    return `
    <section>
      <h1>Use environment variables</h1>
      <p>Netlify Edge Functions support open-source Deno APIs. To access your Netlify environment variables in Edge Functions, use the <code>Deno.env</code> API.</p> 

      <pre><code>import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const value = Deno.env.get("MY_IMPORTANT_VARIABLE");

  return new Response(&grave;Value of MY_IMPORTANT_VARIABLE is "&dollar;{value}".&grave;, {
    headers: { "content-type": "text/html" },
  });
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/environment">View the response from the Edge Function</a></li>
        <li><a href="https://doc.deno.land/deno/stable/~/Deno.env" target="_blank" rel="noopener">View the Deno.env API docs</a></li>
        <li>${repoLink("environment.ts")}</li>
      </ul>
    </section>
  `;
  },
};
