import type { Route } from "./+types/home";
import HomePage from "../src/pages/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gold Auditoria em Saúde" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
