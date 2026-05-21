CREATE TABLE `movements` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`amount` real NOT NULL,
	`hash` text NOT NULL,
	`sender` text NOT NULL,
	`receiver` text NOT NULL,
	`timestamp` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	FOREIGN KEY (`sender`) REFERENCES `wallets`(`address`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`receiver`) REFERENCES `wallets`(`address`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `movements_hash_unique` ON `movements` (`hash`);