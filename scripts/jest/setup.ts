import { configure } from 'enzyme';
import '@testing-library/jest-dom';

// Init Enzyme Adapter
// NB: React version must be <= 16.14.0 NOT 17
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });
