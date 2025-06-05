import {backendUrls as baseurls, backendUrls} from "./backendUrls.js";
import {gimmeAccessFunctionObjectWithURLBase} from './genericCrudPatternWrapperGenerator.js'

export var boxComment = gimmeAccessFunctionObjectWithURLBase(baseurls.boxComments)