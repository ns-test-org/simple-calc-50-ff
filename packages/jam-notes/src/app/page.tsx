'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-background"></div>
      </div>
      
      {/* Calculator */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
          {/* Display */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <div className="text-right text-white text-3xl font-mono overflow-hidden">
              {display}
            </div>
          </div>
          
          {/* Button Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <button
              onClick={clearAll}
              className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              AC
            </button>
            <button
              onClick={clearEntry}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              CE
            </button>
            <button
              onClick={() => inputOperation('÷')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              ÷
            </button>
            
            {/* Row 2 */}
            <button
              onClick={() => inputNumber('7')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              7
            </button>
            <button
              onClick={() => inputNumber('8')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              8
            </button>
            <button
              onClick={() => inputNumber('9')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              9
            </button>
            <button
              onClick={() => inputOperation('×')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              ×
            </button>
            
            {/* Row 3 */}
            <button
              onClick={() => inputNumber('4')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              4
            </button>
            <button
              onClick={() => inputNumber('5')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              5
            </button>
            <button
              onClick={() => inputNumber('6')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              6
            </button>
            <button
              onClick={() => inputOperation('-')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              -
            </button>
            
            {/* Row 4 */}
            <button
              onClick={() => inputNumber('1')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              1
            </button>
            <button
              onClick={() => inputNumber('2')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              2
            </button>
            <button
              onClick={() => inputNumber('3')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              3
            </button>
            <button
              onClick={() => inputOperation('+')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              +
            </button>
            
            {/* Row 5 */}
            <button
              onClick={() => inputNumber('0')}
              className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              0
            </button>
            <button
              onClick={() => inputNumber('.')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              .
            </button>
            <button
              onClick={performCalculation}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-lg transition-colors"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

