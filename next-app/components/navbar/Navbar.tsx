import NavLink from "./links/Link";

export default function Navbar() {
	return (
		<div className="flex justify-between py-8">
			<div className="font-bold text-2xl">Lama</div>
            <div>
               <NavLink /> 
            </div>
		</div>
	);
}
