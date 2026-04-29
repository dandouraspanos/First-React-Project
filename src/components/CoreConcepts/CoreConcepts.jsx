import { CORE_CONCEPTS } from "../../data";
import CoreConcept from './CoreConcept';
import Section from "../Section/Section";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {
                    CORE_CONCEPTS.map((conceptItem) =>
                        <CoreConcept key={conceptItem.title} {...conceptItem} />)
                }
            </ul>
        </Section>
    )
}