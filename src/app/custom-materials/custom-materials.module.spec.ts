import { CustomMaterialsModule } from './custom-materials.module';

describe('CustomMaterialsModule', () => {
  let customMaterialsModule: CustomMaterialsModule;

  beforeEach(() => {
    customMaterialsModule = new CustomMaterialsModule();
  });

  it('should create an instance', () => {
    expect(customMaterialsModule).toBeTruthy();
  });
});
