import {trigger, animate, style, group, query, transition, stagger} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', height: '100vh', maxWidth: '1170px'}), { optional: true }),
        // query(':leave .b-footer', style({position: 'fixed', top: '1000px'}), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)'}),
                animate('0.6s ease', style({ transform: 'translateY(0%)'}))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateY(0%)', opacity: 1 }),
                animate('0.6s ease', style({ transform: 'translateY(-100%)', opacity: 0}))
            ], { optional: true }),
        ]),
        /*
        query(':enter .services__ico', stagger(300, [
            style({transform: 'translateY(100px)'}),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }) */
    ])
]);
