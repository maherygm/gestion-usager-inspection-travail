import jwtDecode from 'jwt-decode';

const TokenDecoder = () => {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const decoded = jwtDecode(token);
            return decoded;
        } catch (error) {
            console.error('Error decoding token:', error.message);
        }
    }else{
        return <div> [Informatiosn vide]  </div>;
    }
    return null;
};

export default TokenDecoder;
