import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }


  static getDerivedStateFromError(error) {

    return { hasError: true, error };
  }


  componentDidCatch(error, errorInfo) {

    console.error(' [ErrorBoundary] Перехвачена ошибка:', error);
    console.error(' Stack trace компонента:', errorInfo.componentStack);
  }


  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {

      return (
        <div className="error-boundary">
          <div className="error-icon">️</div>
          <h2 className="error-title">Что-то пошло не так</h2>
          <p className="error-message">
            Не удалось загрузить список лекторов. Попробуйте обновить страницу.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="error-details">
              <summary>Технические детали (только в режиме разработки)</summary>
              <pre className="error-stack">
                {this.state.error.toString()}
                <br />
                {this.state.error.stack}
              </pre>
            </details>
          )}
          <div className="error-actions">
            <button className="retry-button" onClick={this.handleReset}>
               Попробовать снова
            </button>
            <button 
              className="reload-button" 
              onClick={() => window.location.reload()}
            >
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }


    return this.props.children;
  }
}

export default ErrorBoundary;