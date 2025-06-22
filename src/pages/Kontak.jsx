import BaseLayout from "../layouts/BaseLayout";
import Hero from "../components/kontak/Hero";
import KontakContent from "../components/kontak/KontakContent";


export default function Kontak() {
    return (
        <BaseLayout>
            <Hero />
            <KontakContent />
        </BaseLayout>
    );
}