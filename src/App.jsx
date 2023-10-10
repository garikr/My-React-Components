import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "0",
      label: "Can I use React on a project?",
      content:
        "Yes, you can use React on a project. React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. You can use React to build anything from simple websites to complex web applications.",
    },
    {
      id: "1",
      label: "Can I use Javascript on a project?",
      content:
        "Yes, you can use JavaScript on a project. JavaScript is a programming language that is used to add interactivity and functionality to web pages. It is also used to develop server-side applications, mobile apps, and desktop apps.",
    },
    {
      id: "2",
      label: "Can I use CSS on a project?",
      content:
        "Yes, you can use CSS on a project. CSS is a cascading style sheet language that is used to style HTML elements. It can be used to control the look and feel of your web pages, such as the font, color, and layout.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
