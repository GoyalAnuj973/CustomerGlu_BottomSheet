import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ButtonsWrapper, Container, Content, DemoChild } from "./AppStyles";
import { BottomSheet } from "./components/BottomSheet";
import { Button } from "./components/Button";
import { generatePlaceholderContent } from "./data";
import { closedTheme, openTheme } from "./theme";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDebugMode, setIsDebugMode] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isOpen ? openTheme : closedTheme}>
      <Container>
        <Content>
          <h1>BottomSheet</h1>
          <p>
            Click below to show the BottomSheet
          </p>
          <ButtonsWrapper>
            <Button
              title="Open Bottom Sheet"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></Button>
            {/* <Button
              title="Toggle Debug Information"
              onClick={() => {
                setIsDebugMode(!isDebugMode);
              }}
            ></Button> */}
          </ButtonsWrapper>
          <BottomSheet
            title="Google Keep"
            subtitle="Add to a note"
            isDebugMode={isDebugMode}
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <DemoChild>{generatePlaceholderContent(0)}</DemoChild>
          </BottomSheet>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
