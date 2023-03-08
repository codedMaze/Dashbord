import React, { useContext } from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../Components";
import StateContext from "../context/context";

const Editor = () => {
  const { screenTheme } = useContext(StateContext);
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent
        background={screenTheme === "Dark" ? "#33373E" : "#FFFFFF"}
      >
        {/* <EditorData /> */}
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
