import React from "react";
//создаем главный класс и унаследуем компоненты react
function HomePage({ onSubmit })//принятие свойства
{

    return (
        <form>
          <div className = "form">
           <p>Welcome to Your home page</p>
          </div>
        </form>
    );
}

export default HomePage;
