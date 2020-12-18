import Switch from "components/Switch";
import { useRouter } from "next/router";
import { Big, Short } from "components/Typography";
import { useEffect, useState } from "react";
import Link from "next/link";

const Menu = () => {
	const router = useRouter();
	const [pathname, setPathName] = useState(router.pathname);

	return (
		<div className="w-full h-full flex flex-col items-center">
			<div className="p-12 w-full h-1/3 flex flex-col items-center">
				<Switch />
			</div>
			<div className="p-12 w-full h-1/3 flex flex-col justify-around items-center">
				<Link href="/home">
					<a onClick={() => setPathName("/home")}>
						<Big color={pathname != "/home" && "text-gunmetal-nopacity"}>Home</Big>
					</a>
				</Link>
				<Link href="/feedback">
					<a onClick={() => setPathName("/feedback")}>
						<Big color={pathname != "/feedback" && "text-gunmetal-nopacity"}>Feedback</Big>
					</a>
				</Link>
			</div>
			<div className="p-12 w-full h-1/3 flex flex-col justify-center items-center">
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
	);
};

export default Menu;
