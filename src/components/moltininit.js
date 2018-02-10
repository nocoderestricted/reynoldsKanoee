import { gateway as MoltinGateway } from '@moltin/sdk'
import moltinConfig from './moltinConfig'

const Moltin = MoltinGateway(moltinConfig)

export default Moltin