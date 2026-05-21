CREATE TABLE `contracts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`address` text NOT NULL,
	`creator` text NOT NULL,
	`locked` real DEFAULT 0 NOT NULL,
	FOREIGN KEY (`creator`) REFERENCES `wallets`(`address`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `contracts_address_unique` ON `contracts` (`address`);