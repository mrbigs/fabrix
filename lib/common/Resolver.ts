// tslint:disable no-unused-expression

import { FabrixApp } from '../index'
import { FabrixModel } from './'

/**
 * Fabrix Resolver Class.
 */
export class FabrixResolver {
  private _model: FabrixModel

  /**
   * Model configuration
   */
  static config () {
  }

  constructor (model: FabrixModel) {
    if (!model) {
      throw new RangeError('Resolver must be given a Model to bind to')
    }
    this._model = model
    this.app.emit(`resolver:${this.model.name}:constructed`, this)
  }

  /**
   * Return the parent model
   */
  get model(): FabrixModel {
    return this._model
  }

  /**
   * Return the schema of the parent model
   */
  get schema (): FabrixModel['schema'] {
    return this.model.schema
  }

  /**
   * Returns the instance of the parent model
   */
  get app(): FabrixApp {
    return this.model.app
  }

  /**
    public save(...args) {
      throw new Error('Orm for Save not defined')
    }

    public update(...args) {
      throw new Error('Orm for Update not defined')
    }

    public delete(...args) {
      throw new Error('Orm for Delete not defined')
    }

    public get(...args) {
      throw new Error('Orm for Get not defined')
    }
  */
}

