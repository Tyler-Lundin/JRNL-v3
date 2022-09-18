import styled from 'styled-components'

const Spinner = ({ size = '100px' }) => {
  return <SPINNER size={size} />
}

export default Spinner

const SPINNER = styled.div<{ size: string }>`
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  border-radius: 50%;
  border: 10px solid;
  border-left: 10px dashed;
  border-top: 10px solid;
  border-right: 10px dashed;
  animation: spin 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-color: gold;
    }
    50% {
      transform: rotate(180deg);
      border-color: white;
    }
    100% {
      transform: rotate(360deg);
      border-color: gold;
    }
  }
`
