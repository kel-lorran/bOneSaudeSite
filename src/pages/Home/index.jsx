import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MyHeader from 'components/MyHeader';
import { inputMap } from './helper';

import * as S from './style';
import CustomForm from 'components/CustomForm';
import MyButton from 'components/MyButton';
import { saveNewFlow } from 'actions/flowActions';

const Home = ({history}) => {
    const [flowData, setFlowData] = useState({})
    const [flowDataInputMap, setFlowDataInputMap] = useState([...inputMap[0]])
    const [showFlowStep, setShowFlowStep] = useState(false)
    const [flowStepData, setFlowStepData] = useState([])
    const [stepMap, setStepMap] = useState([{
        id: 'pskreopkes'
    }])
    
    const createFlowDataSubmit = async data => {
       setFlowData(data)
       setFlowDataInputMap(flowDataInputMap.map(inp => ({ ...inp, disabled: true })))
       setShowFlowStep(true)
    }

    const createFlowStepDataSubmit = async data => {
        debugger
        try {
            await saveNewFlow({
                ...flowData,
                category: [flowData.category],
                stepList: data
            });
            console.log({
                ...flowData,
                category: [flowData.category],
                stepList: data
            })
            window.location.reload();
        } catch (error) {
            window.alert('Falha na registro do fluxo');
            console.error(error)
        }
    }

    return (
      <S.PageWrapper>
        <MyHeader />
        <main>
          <S.SectionOne>
            <S.Container>
              <h3>Cadastrar novo fluxo</h3>
              <div className="book-display">
                <CustomForm
                  inputMap={[flowDataInputMap]}
                  onSubmit={createFlowDataSubmit}
                  item={flowData}
                />
              </div>
            </S.Container>
          </S.SectionOne>
          {showFlowStep &&
            stepMap.map(({ id }) => (
              <S.Container key={id}>
                <div className="book-display">
                  <CustomForm
                    inputMap={[inputMap[1]]}
                    onSubmit={createFlowStepDataSubmit}
                  />
                </div>
                <MyButton onClick={() => setStepMap((prev) => prev.filter(e => e.id === id)) }>REMOVER</MyButton>
              </S.Container>
            ))}
        </main>
            <MyButton onClick={() => setStepMap((prev) => [...prev, {
                id: new Date().getTime()
            }])}>ADD</MyButton>
      </S.PageWrapper>
    );
}

export default Home;
