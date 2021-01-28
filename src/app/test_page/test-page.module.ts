import { NgModule } from '@angular/core';
import { TestComponent } from './test-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'test', component: TestComponent },
        ]),
    ],
    declarations: [
        TestComponent
    ]
})

export class TestPageModule { }
