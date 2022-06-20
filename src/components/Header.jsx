import React from "react";

function Header() {
	return (
		<>
			<div className="navbar bg-base-100 sticky top-0 z-10">
				<div className="flex-1">
					<a href="/" className="btn btn-ghost normal-case text-xl">
						<span className=" text-white">Lucas</span>
						<span className="font-bold base-100">Rodriguez</span>
					</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal p-0">
						<li>
							<a href="/cv">CV</a>
						</li>
						<li>
							<a href="/portfolio">Porfolio</a>
						</li>
						<li>
							<a href="/contacto">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Header;
