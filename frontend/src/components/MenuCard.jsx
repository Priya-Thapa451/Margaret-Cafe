export default function MenuCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://sarahsvegankitchen.com/wp-content/uploads/2024/05/Vegan-Croissants-1.jpg"
          alt="Bread"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Crossiant</h2>
        <p>Freshly baked cake</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-[#6E4523]">Buy</button>
        </div>
      </div>
    </div>
  );
}
