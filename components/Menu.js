import Switch from "components/Switch";
import { useRouter } from "next/router";
import { Big, Short, Regular } from "components/Typography";
import { useState, useEffect } from "react";
import Link from "next/link";

const Menu = () => {
	const router = useRouter();
	const [pathname, setPathName] = useState(router.pathname);

	useEffect(() => {
		setPathName(router.pathname);
	}, [router.pathname]);

	return (
		<div className="w-full h-full flex flex-col items-center">
			<div className="md:py-12 w-full h-auto md:h-1/3 flex flex-col items-center">
				<Switch />
			</div>

			<div className="flex flex-row md:flex-col w-full h-full">
				<div className="md:py-12 w-full md:h-1/3 flex flex-col justify-around items-center">
					<Link href="/home">
						<a onClick={() => setPathName("/home")}>
							<Big color={pathname != "/home" && "text-gunmetal-nopacity"}>Home</Big>
						</a>
					</Link>
					<Link href="/features">
						<a onClick={() => setPathName("/features")}>
							<Big color={pathname != "/features" && "text-gunmetal-nopacity"}>Features</Big>
						</a>
					</Link>

					<a
						href="/api/graphql"
						target="_blank"
						className="flex flex-col items-center justify-around h-2/5"
					>
						<Regular className="text-center">GraphQL PlayGround !</Regular>
					</a>
				</div>
				<div className="md:py-12 w-full md:h-1/3 flex flex-col justify-center items-center">
					<a
						href="https://github.com/JustFuknDevIt/graphicl"
						target="_blank"
						className="flex flex-col items-center justify-around h-2/5"
					>
						<img src="/static/svg/github.svg" alt="github link project" width={48} height={48} />
						<Short>See the Githb</Short>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
