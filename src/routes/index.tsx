import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="mb-4">Home page</div>
      <a class="rounded bg-blue-500 text-white p-2" href="/login/">
        login page link
      </a>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
