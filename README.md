# Лабораторная работа 1.01 по Математическому Анализу
#### Развернуто на Github-Pages: https://nikita1238393949.github.io/Lab-Calculus-1.01/#/
## Документация
1. src/views - основные компоненты для управления контентом
2. src/components - вспомогательные компоненты
3. src/components/NumberMethod/MathFunctions.ts - файл с функциями для рассчета графиков
4. src/components/StyledComponents.ts - файл с стилями для контента
5. src/components/NumberMethod/RiemannSumsChart.tsx - компонент для визуализации графиков по интегральным суммам
6. src/components/NumberMethod/DarbouxSumCharts.tsx - компонент для визуализации графиков сумм Дарбу
7. src/.github/workflows/deploy.yml - автодеплой на Pages
### ВНИМАНИЕ 
На выходе функций calculateRiemannSums и calculateDarbouxSums мы получаем датасет значения который передается в компонент отвечающий за визуализацию
