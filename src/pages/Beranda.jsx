import BaseLayout from "../layouts/BaseLayout";
import Hero from "../components/beranda/Hero";
import Layanan from "../components/beranda/Layanan";
import ProfilSingkat from "../components/beranda/ProfilSingkat";
import Testimoni from "../components/beranda/Testimoni";

export default function Beranda() {
    return (
        <BaseLayout>
            <Hero />
            <ProfilSingkat />
            <Layanan />
            <Testimoni />
        </BaseLayout>
    );
}