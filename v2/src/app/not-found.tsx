import AppTypography from "@/components/AppTypography";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container py-30 flex flex-col items-center justify-center text-center">
      <AppTypography variant="heading-xl" className="mb-10">
        PAGE NOT FOUND.
      </AppTypography>
      <Link
        href="/"
        className="text-blue-500/70 hover:text-blue-500 transition-colors"
      >
        <AppTypography variant="heading-xl">HOME</AppTypography>
      </Link>
      <Link
        href="/projects"
        className="text-blue-500/70 hover:text-blue-500 transition-colors"
      >
        <AppTypography variant="heading-xl">PROJECTS</AppTypography>
      </Link>
      <Link
        href="/about"
        className="text-blue-500/70 hover:text-blue-500 transition-colors"
      >
        <AppTypography variant="heading-xl">ABOUT</AppTypography>
      </Link>
      <Link
        href="/contact"
        className="text-blue-500/70 hover:text-blue-500 transition-colors"
      >
        <AppTypography variant="heading-xl">CONTACT</AppTypography>
      </Link>
    </div>
  );
}
