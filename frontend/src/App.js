import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // 追加
import store from './store'; // 追加
import { useMediaQuery } from 'react-responsive';
import PCMain from './components/pc/PCMain';
import MobileMain from './components/mobile/MobileMain';

const App = () => {
  // 画面幅に応じて適切なコンテナコンポーネントを選択
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          {isMobile ? (
            <MobileMain />
          ) : (
            <PCMain/>
          )}
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;