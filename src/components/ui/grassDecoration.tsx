import Grass from "@/assets/elements/Grass.svg";

export default function GrassDecoration() {
  return (
    <div
      className="h-12 w-full bg-repeat-x place-self-end"
      style={{
        backgroundImage: `url(${Grass})`,
        backgroundSize: "auto 100%",
      }}
    />
  );
}
