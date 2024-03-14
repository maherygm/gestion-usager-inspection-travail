import { useTranslation as translate} from 'react-i18next';
import i18n from './i18n';

export const t = (key) => {
  const { t } = translate();
  return t(key);
};
