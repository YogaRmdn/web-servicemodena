import BaseLayout from "../layouts/BaseLayout";
import Hero from "../components/layanan/Hero";
import LayananContent from "../components/layanan/LayananContent";

export default function Layanan() {
    return (
        <BaseLayout>
            <Hero />
            <LayananContent />
        </BaseLayout>
    );
}