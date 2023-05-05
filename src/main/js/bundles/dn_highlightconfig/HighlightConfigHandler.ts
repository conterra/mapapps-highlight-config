///
/// Copyright (C) 2023 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///


import type { InjectedReference } from "apprt-core/InjectedReference";

export default class HighlightConfigHandler {

    private _properties: InjectedReference<any>;
    private _mapWidgetModel: InjectedReference<any>;

    activate(): void {
        this._initComponent();
    }

    private getView(): Promise<__esri.View> {
        const mapWidgetModel = this._mapWidgetModel;
        return new Promise((resolve) => {
            if (mapWidgetModel.view) {
                resolve(mapWidgetModel.view);
            } else {
                const watcher = mapWidgetModel.watch("view", ({ value: view }) => {
                    watcher.remove();
                    resolve(view);
                });
            }
        });
    }

    _initComponent(): void {
        this.getView().then((view) => {
            view.highlightOptions = this._properties.highlightOptions;
        });
    }
}
