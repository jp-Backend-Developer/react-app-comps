import Accordion from "../components/Accordion";

function AccordionPages() {

    const items = [
        {
            id: 1,
            label: 'Reactを使いたい',
            content: '使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。'
        },
        {
            id: 2,
            label: 'Vueを使いたい',
            content: '使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。'
        },
        {
            id: 3,
            label: 'Angularを使いたい',
            content: '使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。使うならReact一択だろ。'
        }
    ]


    return (
        <Accordion items={items} />
    );
}

export default AccordionPages;
