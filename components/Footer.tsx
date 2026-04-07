export default function Footer() {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-bold text-2xl tracking-tighter block mb-2">
            Edanur <span className="font-light text-primary">Kavak</span>
          </span>
          <p className="text-white/60 text-sm">
            Psikolojik Danışmanlık ve Terapi Merkezi
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/80">
          <a href="#about" className="hover:text-primary transition-colors">Hakkımda</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Galeri</a>
          <a href="#services" className="hover:text-primary transition-colors">Çalışma Alanları</a>
          <a href="#contact" className="hover:text-primary transition-colors">İletişim</a>
        </div>

        <div className="text-white/50 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Psk. Edanur Kavak.</p>
          <p>Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
