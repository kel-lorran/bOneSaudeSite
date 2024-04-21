import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MyHeader from '../../components/MyHeader';
import Loader from '../../components/Loader';
import CustomForm from '../../components/CustomForm';

import * as S from './style';
import { inputMap } from './helper';
import { saveNewCustomer } from '../../actions/customerActions';
import { login } from '../../actions/userActions';

import { searchAsObject } from '../../utils';

const Signin = ({ location: { search }, updateProfile, history }) => {
    const [dataToSend, setDataToSend] = useState();
    const { redirectUrl } = searchAsObject(search);

    const createCustomerSubmit = async data => {
        try {
            const result = await saveNewCustomer(data);
            const { email } = data
            debugger
            if(result.uid) {
                updateProfile({ status: !!result.uid, email, token: result.uid });
                window.alert('Sucesso na autenticação')
    
                history.replace(redirectUrl || '/');
            }
        } catch (error) {
            window.alert('Falha na registro');
            console.error(error)
        }
    }

    return ( 
        <S.PageWrapper>
            <MyHeader />
            <main>
                <S.SectionOne>
                    <S.Container>
                        <CustomForm inputMap={[inputMap[0]]} onSubmit={createCustomerSubmit} />
                    </S.Container>
                </S.SectionOne>
            </main>
        </S.PageWrapper>
    )
}

export default Signin;
