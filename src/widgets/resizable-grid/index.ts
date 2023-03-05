/* eslint-disable unicorn/no-null */
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import type { IChangedTiddlers } from 'tiddlywiki';
import { widget as Widget } from '$:/core/modules/widgets/widget.js';

class ResizableGridWidget extends Widget {
  grid?: GridStack;

  refresh(changedTiddlers: IChangedTiddlers): boolean {
    // TODO: refresh when layouts/state changes
    // only refresh on layout change
    return changedTiddlers['$:/layout'] !== undefined;
  }

  /**
   * Lifecycle method: Render this widget into the DOM
   */
  render(parent: Element, _nextSibling: Element | null): void {
    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();

    const containerElement = document.createElement('div');
    this.domNodes.push(containerElement);
    parent.appendChild(containerElement);
    this.renderChildren(containerElement, null);
    // init the grid system
    const grid = GridStack.init({ row: 12, cellHeight: window.innerHeight / 12 }, containerElement);
    this.grid = grid;
  }

  removeChildDomNodes(): void {
    this.grid?.destroy();
  }
}

declare const exports: Record<string, typeof Widget>;
exports['resizable-grid-widget'] = ResizableGridWidget;
