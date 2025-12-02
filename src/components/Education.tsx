import { useEffect } from "react";
import "./styles/Education.css";
import EducationCard from "./EducationCard";

const Education = () => {
    useEffect(() => {
        // Any initialization logic if needed
    }, []);

    return (
        <div className="education-section">

            <div className="edu-title-box">
                <h2>
                    <span className="edu-span">EDUCATION</span>
                </h2>
            </div>

            <div className="edu-cards-container">

                <EducationCard
                    logoUrl="/images/ntic-logo.png"
                    schoolName="ISTA NTIC SM - Casablanca"
                    degree="Technicien Spécialisé en Développement Informatique"
                    period="2021 - 2023"
                    description="Institut Spécialisé de Technologie Appliquée - Diplôme technicien spécialisé."
                    tags={["Développement Informatique", "Programmation", "Web Development", "Databases"]}
                />

                <EducationCard
                    logoUrl="/images/1337-logo.JPG"
                    schoolName="1337 École De Code"
                    degree="Expert en Architecture Informatique"
                    period="2023 - EN COURS"
                    description="42 Network coding school focused on peer-to-peer learning and software architecture."
                    tags={["Architecture Informatique", "C/C++", "Algorithms", "Unix/Linux"]}
                />

                <EducationCard
                    logoUrl="/images/emsi-logo.jpeg"
                    schoolName="EMSI Casablanca"
                    degree="Cycle d'Ingénieur En Génie Informatique Et Réseaux - MIAGE"
                    period="2023 - EN COURS"
                    description="Méthodes Informatiques Appliquées à La Gestion Des Entreprises (MIAGE)."
                    tags={["Génie Informatique", "Réseaux", "Gestion Entreprise", "MIAGE"]}
                />
            </div>
        </div>
    );
};

export default Education;
