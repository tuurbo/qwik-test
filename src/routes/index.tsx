import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>init</>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
