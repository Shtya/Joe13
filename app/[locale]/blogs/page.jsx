import Filter from '@/components/pages/blogs/Filter';
import Text from '@/components/pages/home/Text';
import EffectFixed from '@/helpers/EffectFixed';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function page() {
    const t = useTranslations('Blogs');

    return (
        <EffectFixed image={'/assets/imgs/blogs.png'}>
            <Text overlay={true} title={t('blogs')} description={t('blogsDescription')} component={<Filter />} />
        </EffectFixed>
    );
}
