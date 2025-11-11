import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";

// --- Stats Data ---
const stats = [
	{
		value: 92,
		label: "Years of experience",
	},
	{
		value: 75000,
		label: "Total workforce",
		suffix: "+",
	},
	{
		value: 250.0,
		label: "Total hydrocarbon reserves",
		sublabel: "(billion boe)",
	},
];

// --- Count Up Hook ---
function useCountUp(target, active, duration = 3) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!active) {
			setCount(0);
			return;
		}
		let start = 0;
		let raf;
		const startTime = performance.now();
		const animate = (now) => {
			const elapsed = (now - startTime) / 1000;
			const progress = Math.min(elapsed / duration, 1);
			let val = target;
			if (typeof target === "number") {
				val = target * progress;
				if (target >= 1000) val = Math.floor(val);
				else val = Math.round(val * 10) / 10;
			}
			setCount(progress < 1 ? val : target);
			if (progress < 1) raf = requestAnimationFrame(animate);
		};
		raf = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(raf);
	}, [target, active, duration]);
	return count;
}

// --- Main Section ---
export default function AtAGlanceSection({ onActive }) {
	const sectionRef = useRef();
	const inView = useInView(sectionRef, { threshold: 0.5 });
	const controls = useAnimation();
	const [hasAnimated, setHasAnimated] = useState(false);

	// Navbar mode switching
	useEffect(() => {
		if (inView) {
			onActive?.("at-a-glance", "light");
		} else {
			onActive?.(null, "dark");
		}
	}, [inView, onActive]);

	// Section cinematic entrance
	useEffect(() => {
		if (inView) {
			controls.start("visible");
			setHasAnimated(true);
		} else {
			controls.start("hidden");
			setHasAnimated(false);
		}
	}, [inView, controls]);

	// --- Parallax background effect ---
	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			const windowH = window.innerHeight;
			const progress = Math.max(0, Math.min(1, 1 - rect.top / windowH));
			sectionRef.current.style.backgroundPosition = `center ${progress * 40}px`;
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.section
			ref={sectionRef}
			aria-label="At a glance statistics"
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, scale: 0.98, filter: "blur(2px)" },
				visible: {
					opacity: 1,
					scale: 1,
					filter: "blur(0px)",
					transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
				},
			}}
			className="banner-section w-screen relative overflow-hidden"
			style={{
				marginLeft: "calc(-50vw + 50%)",
				marginRight: "calc(-50vw + 50%)",
				width: "100vw",
				maxWidth: "100vw",
				background: "linear-gradient(120deg,#1E1E1E 0%,#121212 100%)",
				backgroundAttachment: "fixed",
				minHeight: 340,
				padding: "64px 0 32px 0",
				willChange: "opacity,transform,filter,background-position",
			}}
			role="region"
		>
			{/* Headline */}
			<motion.h2
				className="text-white text-3xl md:text-4xl font-medium text-center mb-12"
				initial={{ opacity: 0, y: 30 }}
				animate={
					inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
				}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				At a glance
			</motion.h2>
			{/* Stats Grid */}
			<div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-0">
				{stats.map((stat, i) => {
					const count = useCountUp(stat.value, inView, 3);
					return (
						<motion.div
							key={stat.label}
							className="flex flex-col items-center justify-center"
							initial={{ opacity: 0, y: 40 }}
							animate={
								inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
							}
							transition={{ duration: 0.7 + i * 0.1, ease: "easeOut" }}
							aria-label={stat.label}
						>
							<motion.span
								className="text-white text-4xl md:text-5xl font-light mb-2 transition-all duration-300 hover:font-semibold"
								whileHover={{ fontWeight: 600, scale: 1.04 }}
								aria-live="polite"
							>
								{i === 1
									? `${count.toLocaleString()}${stat.suffix || ""}`
									: i === 2
									? `${count.toFixed(1)}`
									: `${count}`}
							</motion.span>
							<span className="text-gray-300 text-sm md:text-base text-center mb-2">
								{stat.label}
								{stat.sublabel && (
									<span className="block text-xs text-blue-300 mt-1">
										{stat.sublabel}
									</span>
								)}
							</span>
							{/* Animated underline progress bar */}
							<motion.div
								className="w-full h-[2px] bg-transparent mt-4"
								style={{ maxWidth: "320px" }}
							>
								<motion.div
									className="h-full bg-gray-400"
									initial={{ width: 0 }}
									animate={
										inView
											? { width: "100%" }
											: { width: 0 }
									}
									transition={{
										duration: 1.2,
										ease: [0.4, 0, 0.2, 1],
										delay: 0.2 + i * 0.2,
									}}
									aria-hidden="true"
								/>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
			
		</motion.section>
	);
}