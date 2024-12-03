import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";

import { AppModule } from "@modules/app.module";
import { HttpExceptionFilter } from "@helpers/httpExceptionFilter.helper";
import { configHelper } from "@helpers/config.helper";

void (async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = configHelper.getServerPort();

    app.useGlobalFilters(new HttpExceptionFilter(new Logger()));
    await app.listen(port, () =>
      console.info(`Server has started on the ${port} port`),
    );
  } catch (error) {
    console.error(`Server has not started because of error: ${error.message}`);
  }
})();
