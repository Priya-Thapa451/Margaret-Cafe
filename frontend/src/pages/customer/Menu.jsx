import MenuCard from "../../components/MenuCard";

export default function Menu() {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold animate-bounce mt-2 text-amber-950">
        Our Menu
      </h1>
      <div className="flex justify-evenly mt-3">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div className="flex justify-evenly mt-3">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
}
