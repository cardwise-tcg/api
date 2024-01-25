import {compile as LorcanaCompile} from './lorcana';


if (process.argv.includes('--with-lorcana')) {
    console.log('Compiling Lorcana data...');
    LorcanaCompile().then(() => {
        console.log('Lorcana data compiled.');
    });
}

