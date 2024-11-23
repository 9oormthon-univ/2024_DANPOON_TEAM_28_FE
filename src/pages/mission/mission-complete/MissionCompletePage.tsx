import Layout from '@/layouts/Layout';
import { useForm } from 'react-hook-form';
import Difficulty from './Difficulty';
import { IMissionCompleteForm } from '@/types/IMissionCompleteForm';
import DifficultyRadio from './DifficultyRadio';

const MissionCompletePage = () => {
    const { control, handleSubmit } = useForm<IMissionCompleteForm>({});
    return (
        <Layout>
            <DifficultyRadio control={control} />
        </Layout>
    );
};

export default MissionCompletePage;
