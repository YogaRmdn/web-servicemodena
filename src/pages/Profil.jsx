import BaseLayout from "../layouts/BaseLayout";
import Hero from "../components/profil/Hero";
import Tentang from "../components/profil/Tentang";

export default function Profil() {
    return (
        <BaseLayout>
            <Hero />
            <Tentang />
        </BaseLayout>
    );
}