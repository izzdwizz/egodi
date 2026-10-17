export default function Footer() {
  return (
    <div className="w-full py-10 max-w-screen-xl mx-auto px-4">
      <p className="text-center text-[var(--muted-strong)] text-base">
        © {new Date().getFullYear()}. All rights reserved by Egodi Uchendu
      </p>
    </div>
  );
}
