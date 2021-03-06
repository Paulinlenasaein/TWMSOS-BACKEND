import { Component } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { UtilService } from './services/util.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UtilService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Service online de ventesécurisée de TW Micronics';
  items1: MenuItem[];
  items2: MenuItem[];
  display: boolean = false;
  comp: string;

  constructor(private utilService: UtilService) {
    this.items1 = [];
    this.items2 = [];
   }

  ngOnInit() {
    this.comp = this.utilService.getComponent();
    this.items1 = [
        {label: 'Anglais', icon: 'fa fa-flag', command: () => {
            this.english();
        }},
        {label: 'Français', icon: 'fa fa-flag-checkered', command: () => {
            this.french();
        }}
    ];

    this.items2 = [
            {
                label: 'SOFTWARE & CLOUD',
                icon: 'fa fa-fw fa-cloud',
                items: [{
                        label: 'New',
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project', icon: 'fa fa-fw fa-lock'},
                            {label: 'Other', icon: 'fa fa-fw fa-list'}
                        ]
                    },
                    {label: 'Open', icon: 'fa fa-fw fa-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'fa fa-fw fa-close'}
                ], command: () => {
                    console.log("Hello");
                }
            },
            {
                label: 'TRAINING AND CERTIFICATIONS',
                icon: 'fa fa-fw fa-certificate',
                items: [
                    {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'DIGITAL MARKETING',
                icon: 'fa fa-fw fa-bookmark',
                items: [
                    {
                        label: 'Contents',
                        icon: 'fa fa-fw fa-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'fa fa-fw fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File',
                                icon: 'fa fa-fw fa-file',
                            }
                    ]}
                ]
            },
            {
                label: 'INTERNET OF THINGS',
                icon: 'fa fa-fw fa-internet-explorer',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa fa-fw fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            }
        ];
  }

  english(){}

  french(){}

}
