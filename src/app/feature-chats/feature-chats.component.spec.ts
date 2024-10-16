import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureChatsComponent } from './feature-chats.component';

describe('FeatureChatsComponent', () => {
  let component: FeatureChatsComponent;
  let fixture: ComponentFixture<FeatureChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureChatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
